export class Message{
    constructor(
        public type:string,
        public text:string
    ){}
    
  public showMessage(text,type) {
        this.type=type,
        this.text=text
        window.setTimeout(() => {
          this.text = '';
        }, 5000);
      }
}