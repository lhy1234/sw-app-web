
//判断是否登录

function isLogin(){
	var token = h.getItem('swToken');
	var user = h.getItem('swUser');
	if(token){
		return true;
	}else{
		return false;
	}
}
 