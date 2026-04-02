 let data = [];

function crudList (){
    list.innerHTML = data.map((item, i) =>
        <li> 
            ${item}
            <div>
                   <button onclick="edit(${i})">✏️Edit</button>
//                 <button onclick="delete(${i})">🗑Delete</button>
            </div>
            </li>
    ).join("");
    }

function send (){
    if (Input.value.trim()) {
        data.push(input.value.trim());
        input.value = ""
    } else {
        alert("")
    }
}
























//        function crudList() {
//     const list = document.getElementById('List');
//     list.innerHTML = data.map((item, i) => `
//         <li data-index="${i}">
//             <span class="item-text">${item}</span>
//             <div>
//                 <button onclick="editItem(${i})">✏️Edit</button>
//                 <button onclick="deleteItem(${i})">🗑 Delete</button>
//             </div>
//         </li>
//     `).join("");
// }

//     function Send() {
//         const input = document.getElementById('Input');
//         if (input.value.trim()) {
//             data.push(input.value.trim());
//             input.value = "";
//             crudList();
            
//         }else{
//             alert('Please enter an item!');
//         }
//     }

//     function deleteItem(index) {
//         if (confirm('Are you sure you want to delete this item?')) {
//             data.splice(index, 1);
//             crudList();
//         }
//     }


//     function editItem(index) {
//         const newValue = prompt('Edit item', data[index]);
//         if (newValue !== null && newValue.trim() !== '') {
//             data[index] = newValue.trim();
//             crudList();
//         }else if(newValue !== null){
//             alert('Item cannot be empty!');
//         }
//     }


//     function escapeHtml(text) {
//         const div = document.createElement('div');
//         div.textContent = text;
//         return div.innerHTML;
//     }



//     document.addEventListener('DOMContentLoaded', function(){
//         const input = document.getElementById('itemInput');
//         input.addEventListener('keypress',function(e){
//             if(e.key === 'Enter'){
//                 addItem();
//             }
//         });
//     });

