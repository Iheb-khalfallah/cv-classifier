import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminside',
  templateUrl: './adminside.component.html',
  styleUrls: ['./adminside.component.scss']
})
export class AdminsideComponent {

  selectedFile: any ;
  selectedFileB64 : string="";
  selectedFilePath : string="" ;
  isFileDocument:boolean = false;
  responseData: any;
  clicked:boolean = false;
  uploaded:boolean = false;


  constructor(private http:HttpClient, private toastr: ToastrService){}
  

  onfilterFileSelected(event:any): void{
    this.selectedFile = event.target.files[0] ?? null ;
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
        else{
          this.isFileDocument=false;
        }
      }
    }
  }


  uploadfilterfile():void{
    if (this.selectedFile) {
      let formData = new FormData();
      formData.append('file', this.selectedFile);
      this.http.post('http://localhost:8080/uploadadminfile', formData).subscribe(
        (response) => {
          console.log(response);
          this.uploaded=true;
          this.toastr.success('Your PDF Filter File Has been Uploaded Successfully \n Now You Have To Wait For The Dead Line', 'Success');
        },
        (error) => {
          console.log(error);
          this.uploaded=false;
          this.toastr.error('Your PDF Filter File Is Not Uploaded , try again Please ', 'Error' );
        }
      );
    }
    if (this.uploaded==true){
      this.clicked=true;
    }
  }

  resetSelectedfilterFile(): void {
    this.clicked=false;
    this.selectedFile = null;
    this.selectedFileB64 = '';
    this.selectedFilePath = '';
    this.isFileDocument = false;
  }
}
