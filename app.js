// console.log('object');


// function  =====================1=================

function showData(){
        let spin = document.getElementById('spin');
        spin.classList.remove('hidden');
        setTimeout(()=>{
        spin.classList.add('hidden');
         let input= document.getElementById('inputValue').value ;
     
         fetch(`https://openapi.programming-hero.com/api/phones?search=${input}`)
         .then(res => res.json())
         .then(data => showMobileData(data.data))
         
     document.getElementById('inputValue').value = ''
     },100)


    
}

// function ====================== 3    

function showMobileData(data){
    // console.log(data);
    let mobile = document.getElementById('mobile')
    data.forEach(singleData => {
        // console.log(singleData);

        let {brand,phone_name,image,slug} = singleData;

  
        let div = document.createElement('div')
        // console.log(div);
        div.innerHTML = `
                   <div class="card bg-base-100  shadow-xl">
  <figure class="px-5 pt-9">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone_name}</h2>
    <p class="text-sm">The iPhone revolutionized smartphones with its sleek design, powerful features, seamless integration, and intuitive user experience.</p>
      <p  class="text-lg font-bold text-center">Price: $999</p>
    <div class="card-actions">
      <button onclick="makeMobileSection('${slug}')" class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `
        mobile.appendChild(div)
    });
}


function makeMobileSection(slugs){
  console.log(slugs);
  fetch(`https://openapi.programming-hero.com/api/phone/${slugs}`)
         .then(res => res.json())
         .then(data => mopbileDetails(data.data))
}

function mopbileDetails(details){

       console.log(details);
       let {brand ,name,releaseDate,image,USB} = details;
         let  chipSet = details.mainFeatures.chipSet
         let  memory = details.mainFeatures.memory
         let  wlan = details.others.WLAN

      let modalbox = document.getElementById('modalBox');
      modalbox.innerHTML = `
         <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box ">
          <h3 class="text-lg font-bold">${brand}</h3>
         <img src=${image} alt="">

          <p class="py-2">${name}</p>
          <p class="py-2">${chipSet}</p>
          <p class="py-2">${releaseDate}</p>
          <p class="py-2">${memory}</p>
          <p class="py-2">${wlan}}</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn bg-sky-700 text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      `
      my_modal_5.showModal()


}


// stopSpin()
showData()
// showUrl()

makeMobileSection()