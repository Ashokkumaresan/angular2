export class AuthService{
	loggedIn:boolean=false;

	Login(){
		this.loggedIn=true;
	}
	Logout(){
		this.loggedIn=false;
	}
	isAuthenticated(){
		const promise=new Promise(
			(resolve,reject)=>{
				setTimeout(()=>{
					resolve(this.loggedIn);	
				},800);				
			}
			);
		return promise;
	}
}