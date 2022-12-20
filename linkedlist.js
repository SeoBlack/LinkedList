let Node = (value) => {
    return {
	value:value || null,
	nextNode:null
    }
}
const LinkedList = () =>{
    let HEAD = null;
    let length = 0;


    const append = (value) => { 
		const newNode = Node(value);
		length++;
		if (HEAD === null){
		    return (HEAD = newNode);
		}
		let pointer = HEAD;
		while (pointer.nextNode !== null){
		    pointer = pointer.nextNode;
		}
		pointer.nextNode = newNode;
    };
    const prepend = (value)=>{
		const newNode = Node(value);
		length++;
		if(HEAD === null){
		    return (HEAD = newNode);
		}
		newNode.nextNode = HEAD;
		HEAD  = newNode;
    }
    const size = ()=>{
		if(!HEAD) return null;
		return length;
    }
    const head = ()=>{
		if(!HEAD) return null;
		return HEAD.value;
    }
    const tail = ()=>{
		if(!HEAD) return null;
		let pointer = HEAD;
		while(pointer.nextNode !== null){
		    pointer = pointer.nextNode;
		}
		return pointer.value;
    }
    const at = (index)=>{
		if(!HEAD) return null;
		let pointer = HEAD;
		for(let i = 0 ; i < index ; i++){
		    if(!pointer.nextNode) return null
		    pointer = pointer.nextNode;
		}
		return pointer;
    }
    const pop = () => {
		if (!HEAD) return null;
		if (HEAD.nextNode === null ) HEAD = null;
		at(size() - 2 ).nextNode = null;
		length --;
    }
    const containes = (value) => {
		if (!HEAD) return null;
		if (HEAD.value === value ) return true;
		let pointer = HEAD.nextNode;
		for (let i = 0 ; i < size() - 1; i++){
		    if(pointer.value === value){	
				return true;
		    }
		    else
		    {
				pointer = pointer.nextNode;
		    }
		}
		return false;
    }
    const find = (value) => {
		if(!HEAD) return null;
		let pointer = HEAD;
		let index;
		while(pointer.nextNode !== null  ){
		    if(pointer.value === value) return index;
		    pointer = pointer.nextNode;
		    index++;
		}
		if(pointer.value === value ) return index;
		else return null;
    }

    const toString = ()=>{
		if(!HEAD) return null;
		let pointer = HEAD;
		let string = "";
		while(pointer.nextNode !== null){
		    string = string.concat(`(${pointer.value}) --> `);
		    pointer = pointer.nextNode;
		}
		string = string.concat(`(${pointer.value}) --> null`);
		console.log(string);
		return string;
    };

    const insertAt = (value , index)=>{
		if(!HEAD) return null;
		const newNode = Node(value);
		length++;
		let pointer = HEAD;
		for (let i = 0 ; i <= index  ; i++ ){
		    pointer = pointer.nextNode;
		}
		const nextNode = pointer.nextNode;
		pointer.nextNode  = newNode;
		newNode.NextNode  = nextNode;
    };
    const removeAt  = (index) =>{
		if(!HEAD) return 0;
		if(index === 0) HEAD = HEAD.nextNode;
		else{
		    const nodeBefore = at( index - 1);
		    nodeBefore.nextNode = nodeBefore.nextNode.nextNode;
		}
		length--;
	};


	return{append,prepend,size,head,tail,at,pop,containes,find,toString,insertAt,removeAt};

}


const array = LinkedList();
array.append(928);
array.append(345);
array.append(456);
array.append(348);
array.append(102);
array.toString();
array.pop();
array.toString();
array.find(456);


