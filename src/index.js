import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyABwCLmtnpA80WE5VnSoIh0qpBhoTejJXo';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], videoSelected: null };
        this.videoSearch('surfboards');
    };

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({ videos, videoSelected: videos[0] });
        })
    }
    
    render() {
        const videoSearch = _.debounce(term => this.videoSearch(term), 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.videoSelected} />
                <VideoList 
                    onVideoSelect={(videoSelected) => this.setState({videoSelected})}
                    videos={this.state.videos} 
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));