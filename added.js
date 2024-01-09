let total = 0;

function showBtn(target) {
    const findItems = document.getElementById('selected-items')
    const findName = target.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = findName;
    findItems.appendChild(li);
    // console.log(target.childNodes[7].innerText.split(" ")[0])
    const price = target.childNodes[7].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);
    // console.log(total)
    document.getElementById('total').innerText = total
    if (total >= 200) {
        


    }



}
document.getElementById('other-file').addEventListener('click', function () {
    window.location.href = 'another.html';
})
//  document.getElementById('discount').addEventListener('click', function(){

//  })
