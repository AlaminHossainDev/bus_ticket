// select all button
const allBtn = document.getElementsByClassName("btn-select");
let count = 0;
let count2 = 40;
let totalTicketPrice = 0;

// count seat
for(const btn of allBtn){
    btn.addEventListener('click', function(event){
        if(count < 4){
            count = count + 1;
            count2 = count2 - 1;
            totalTicketPrice = count * 550;
            console.log(totalTicketPrice);
            setInnerText("total-ticket-price", totalTicketPrice)
            setInnerText("seat-left", count2);
            setInnerText("seat-count", count);

            // Change bg-button color & removed previous bg-button-color
            btn.classList.add('bg-[#1DD100]', 'text-white');
            btn.classList.remove('bg-[#F7F8F8]');

            // get all seat Name, class , price
            const seatName = event.target.innerText
            const SeatPrice = 550;
            const seatClass = "Economy"
            const selectedContainer = document.getElementById('selected-container')
            const tr = document.createElement("tr");

            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            td1.innerText = seatName;
            td2.innerText = seatClass;
            td3.innerText = SeatPrice;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            selectedContainer.appendChild(tr);
        }else{
            alert("You can only select 4 seats at a time");
        }
        
    })
}

// inner Text changes function
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
};

