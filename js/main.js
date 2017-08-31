var nums = [];
for(i=0;i<4;i++){
	for(j=0;j<4;j++){
		nums[i*4+j] = new Object();
		nums[i*4+j].dom = document.getElementById('p'+(i+1)+''+(j+1));
		nums[i*4+j].con = 0;
	}
}
document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
  	if(e && e.keyCode==37){ //按左键 
    //要做的事情
    Move();
   }
  	if(e && e.keyCode==38){ //按上键 
     //要做的事情
     Move();
    }      
  	if(e && e.keyCode==39){ //按右键
     //要做的事情
     Move();
  	}
  	if(e && e.keyCode==40){ //按下键
     //要做的事情
     Move();
  	}
}; 

//随机函数
function Ran(){
	var r = Math.random()*16;
	r = parseInt(r,10);
	return r;
}
//移动函数
function Move(){
	//随机生成一个2
	var address = Ran();
	while(nums[address].con!=0){
		address = Ran();
	}
	nums[address].con = 2;
	nums[address].dom.innerHTML = 2;
}
//相同数值模块相遇合并

