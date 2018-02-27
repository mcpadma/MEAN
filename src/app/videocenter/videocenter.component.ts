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
    this.hideNewVideo = true;
    console.log(this.selectedVideo);
  }
  
  onSubmitAddVideo(video: Video){
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
      this.videos.push(resNewVideo);
      this.hideNewVideo = true;
      this.selectedVideo = resNewVideo;
  });
}

onupdateVideoEvent(video: any){
  this._videoService.updateVideo(video)
  .subscribe(resUpdatedVideo => video = resUpdatedVideo);
  this.selectedVideo = null;
}

ondeleteVideoEvent(video: any){
  let videoArray = this.videos;
  this._videoService.deleteVideo(video)
  .subscribe(resDeletedVideo => {
    for(let i=0; i < videoArray.length; i++){
      if(videoArray[i]._id === video._id){
        videoArray.splice(i,1);
      }
    }
  });
this.selectedVideo = null;
}

  hideNewVideo = true;
  newVideo(){
    this.hideNewVideo = false;
  }

}
