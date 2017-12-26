function A(obj){
    var defaults = {
        background:'#ccc',
        width:400,
        height:200,
        btn:['确定']
    }
    var bb={};
    var b=Object.assign(bb,defaults,obj);
    this.width=b.width;
    this.height=b.height;
    this.background=b.background;
    this.position=b.position;
    this.content=b.content;
    this.sure=b.sure;
    this.c=b.close;
    this.btn=b.btn;
    this.winw=document.body.clientWidth||document.documentElement.clientWidth;
    this.winh=document.body.clientHeight||document.documentElement.clientHeight;
    this.init();
}
A.prototype={
    constructor:A,
    init:function(){
        var that=this;
        // 初始结构
        var mark=document.createElement("div");
        var div=document.createElement("div");
        div.className="divbox";
        mark.className="mark";
        mark.style='width:'+this.winw+'px;'+'height:'+this.winh+'px;';
        div.style='width:'+this.width+'px;'+'height:'+this.height+'px;'+'background:'+this.background+';left:'+(this.winw-this.width)/2+'px;top:'+(this.winh-this.height)/2+'px';
        document.body.appendChild(mark);
        document.body.appendChild(div);
        var h3=document.createElement("h3");
        var box=document.createElement("div");
        box.className="box";
        h3.innerHTML=this.content;
        div.appendChild(h3);
        div.appendChild(box);
        var b=document.createElement("b");
        b.className = 'remove';
        b.innerHTML = 'X';
        div.appendChild(b);
        var s="";
        for(var i=0;i<this.btn.length;i++){
            if(this.btn[i] === '确定') {
                s+='<span class="sure">'+this.btn[i]+'</span>';
            } else if(this.btn[i] === '取消') {
                s+='<span class="close">'+this.btn[i]+'</span>';
            }
        }
        box.innerHTML+=s;
        // 点击确定、取消执行对应语句
        var sbtn = document.querySelector('.sure');
        var cbtn = document.querySelector('.close');
        sbtn.onclick=this.sure;
        cbtn.onclick=this.c;
        // remove  移除遮罩、弹窗
        var remove = document.querySelector('.remove');
        var mark = document.querySelector('.mark');
        var divbox = document.querySelector('.divbox');
        remove.onclick = function () {
            document.body.removeChild(mark);
            document.body.removeChild(divbox);
        }
    }
}
