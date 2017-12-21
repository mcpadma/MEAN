import { Component, OnInit } from '@angular/core';
import { Video } from'./../video'
@Component({
  selector: 'app-videocenter',
  templateUrl: './videocenter.component.html',
  styleUrls: ['./videocenter.component.css']
})
export class VideocenterComponent implements OnInit {

  videos: Video[]=[
    {"_id":"1","title":"Title 1","url":"url 1","description":"desc 1"},
    {"_id":"1","title":"Title 2","url":"url 1","description":"desc 2"},
    {"_id":"1","title":"Title 3","url":"url 1","description":"desc 3"},
    {"_id":"1","title":"Title 4","url":"url 1","description":"desc 4"}
  ];
  
  selectedVideo: Video;
  constructor() { }

  ngOnInit() {
  }

  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
