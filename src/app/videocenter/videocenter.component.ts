import { Component, OnInit } from '@angular/core';
import { Video } from "../video";
import { VideoService } from './../video.service';

@Component({
  selector: 'app-videocenter',
  templateUrl: './videocenter.component.html',
  styleUrls: ['./videocenter.component.css'],
   providers: [VideoService]
})
export class VideocenterComponent implements OnInit {

  // _videoService: any;

  videos: Array<Video>;
  
  selectedVideo: Video;
  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData);
      console.log(this.videos);
  }

  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
