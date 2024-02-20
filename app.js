// select all button
const allBtn = document.getElementsByClassName("btn-select");
let count = 0;
let count2 = 40;

// count seat
for(const btn of allBtn){
    btn.addEventListener('click', function(event){
        if(count < 4){
        count = count + 1;
        count2 = count2 - 1;
        setInnerText("seat-left", count2);
        setInnerText("seat-count", count);

        // Change background button color
        btn.classList.add('bg-[#1DD100]', 'text-white');
        btn.classList.remove('bg-[#F7F8F8]');
        }else{
            alert("You can only select 4 seats at a time");
        }
        
    })
}

// inner Text changes function
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}