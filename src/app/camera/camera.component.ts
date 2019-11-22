import { Component, OnInit } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';
import {WebcamconnectService} from '../webcamconnect.service';
declare var require: any;
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  // latest snapshot
  public webcamImage: WebcamImage = null;

  base64: string;
  imageUrl;

  constructor(private _googleservice : WebcamconnectService) {

  }

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }
  

// toggle webcam on/off
public showWebcam = true;
public allowCameraSwitch = true;
public multipleWebcamsAvailable = false;
public deviceId: string;
public videoOptions: MediaTrackConstraints = {
  // width: {ideal: 1024},
  // height: {ideal: 576}
};
public errors: WebcamInitError[] = [];



// webcam snapshot trigger
private trigger: Subject<void> = new Subject<void>();
// switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

public triggerSnapshot(): void {
  this.trigger.next();
  this.toggleWebcam();
}

public toggleWebcam(): void {
  this.showWebcam = !this.showWebcam;
  
}

public handleInitError(error: WebcamInitError): void {
  this.errors.push(error);
}

public showNextWebcam(directionOrDeviceId: boolean|string): void {
  // true => move forward through devices
  // false => move backwards through devices
  // string => move to device with given deviceId
  this.nextWebcam.next(directionOrDeviceId);
}

public handleImage(webcamImage: WebcamImage): void {
  console.info('received webcam image', webcamImage);
  this.webcamImage = webcamImage;
  this.imageUrl = webcamImage.imageAsDataUrl;
}

public cameraWasSwitched(deviceId: string): void {
  console.log('active device: ' + deviceId);
  this.deviceId = deviceId;
}

public get triggerObservable(): Observable<void> {
  return this.trigger.asObservable();
}

public get nextWebcamObservable(): Observable<boolean|string> {
  return this.nextWebcam.asObservable();
}

public save(){
  console.log("Save picture"); 
  console.log(this.imageUrl);

  //this.convertToBase64();
  const payload: any = {
    'requests': [
      {
        'image': {
          'content' : this.imageUrl.substring(23, this.imageUrl.length)
        },
        'features': [
          {
            'type': 'TEXT_DETECTION',
            'maxResults': 1
          }
        ]
      }
    ]
  }

  this._googleservice.detectText(payload, this.imageUrl);

}


convertToBase64() {
  // const image = document.createElement('img');
  // image.src = this.imageUrl;
  const imgNode = this.imageUrl;
  if (imgNode ) {
    console.log('SELECTED IMAGE');
    console.log(imgNode);
    console.log('SELECTED IMAGE');
    domtoimage.toPng(imgNode)
    .then( (dataUrl: string) => {
      console.log('SELECTED IMAGE 2');
      console.log(dataUrl);
      this.base64 = dataUrl;
      console.log('SELECTED IMAGE 2');
    }).catch( (e: any) => {
      console.log('SELECTED IMAGE BASE64 SOMETHING WENT WRONG');
      console.log(e);
    });
   }
}
}




