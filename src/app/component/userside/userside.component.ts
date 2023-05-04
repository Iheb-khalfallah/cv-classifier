import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userside',
  templateUrl: './userside.component.html',
  styleUrls: ['./userside.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class UsersideComponent {
  
  @Input() isUserSide:boolean=false;
  selectedFile: any ;
  selectedFileB64 : string="";
  selectedFilePath: string="";
  isFileDocument:boolean = false;
  responseData: any;
  clicked:boolean = false;
  uploaded:boolean = false;

  constructor(private http:HttpClient , private toastr: ToastrService){}


  onFileSelected(event:any): void{
    this.selectedFile = event.target.files[0] ?? null;
    if (this.selectedFile){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event)=>{
        let path = event.target == null ? '' : event.target.result ;
        this.selectedFilePath = path as string ;
        this.selectedFileB64 = this.selectedFilePath.split(",")[1];
        if (this.selectedFilePath.includes("pdf")){
          this.isFileDocument=true;
        }
      }
    }
  }

  uploadfile():void{
    if (this.selectedFile) {
      let formData = new FormData();
      formData.append('file', this.selectedFile);
      this.http.post('http://localhost:8080/upload', formData).subscribe(
        (response) => {
          console.log(response);
          this.uploaded=true;
          this.toastr.success('Your PDF File Has been Uploaded Successfully', 'Success');
        },
        (error) => {
          console.log(error);
          this.toastr.error('Your PDF File Is Not Uploaded , try again Please ', 'Error');
      }
      );
    }
    if (this.uploaded==true){
      this.clicked=true;
    }
  }

  resetSelectedFile(): void {
    this.clicked=false;
    this.selectedFile = null;
    this.selectedFileB64 = '';
    this.selectedFilePath = '';
    this.isFileDocument = false;
  }
  
}

