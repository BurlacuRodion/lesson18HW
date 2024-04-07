const arr =[7,3,6,0, 'f'];

const sortArr = (arr, direction) => {
   
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 'arr contains not number elements'
        }
    }

    if(direction === 'ASC') {
        return arr.sort((a,b)=> a-b);
    }else {
        return arr.sort((a,b)=> b-a);
    }
}
//console.log(sortArr(arr, 'ASC'))

//=====================================================//

function returnIndex(arr,el) {
    const res = arr.findIndex(item => item === el)

    if (res != -1) return res
    else return 'not found' 
}
console.log(returnIndex([3,7,2],4))
