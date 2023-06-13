const header = document.querySelector(".header")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")

const headerDiv = document.createElement("div")
headerDiv.classList.add("title")
headerDiv.innerHTML = "<h1>Dog Caresheet</h1>"
header.append(headerDiv)

const leftPnl = document.createElement("div")
leftPnl.classList.add("leftpnl")
const leftImgs = document.createElement("div")
leftImgs.classList.add("leftimgs")

const dogImg1 = document.createElement("img")
dogImg1.classList.add("dogimgs")
dogImg1.src = "imgs/dog1.jpg"
leftImgs.append(dogImg1)

const dogImg2 = document.createElement("img")
dogImg2.classList.add("dogimgs")
dogImg2.src = "imgs/dog2.jpg"
leftImgs.append(dogImg2)

leftPnl.append(leftImgs)
main.append(leftPnl) 


const middlePnl = document.createElement("div")
middlePnl.classList.add("middlepnl")
const topDiv = document.createElement("div")
topDiv.classList.add("topDiv")
topDiv.innerHTML = `<p>You just adopted/rescued your first dog? or maybe even purchased your pup. It's always an exciting time to bring a new family member home, but dogs are a huge commitment. They require lots of care and attention. Here is a start up list to help you with basic necessities. </p> 
                    <br>`
const list = document.createElement("div")
list.classList.add("list")
list.innerHTML = `<ul>
                    <li>Complete and balanced, age/breed appropriate dog food</li>  
                    <li>Food and water bowls (preferably stainless steel material)</li>  
                    <li>Collar</li>  
                    <li>ID tag</li>
                    <li>Harness and leash</li>  
                    <li>Kennel and/or doghouse</li>  
                    <li>Toys age and size appropriate</li>  
                    <li>Training treats</li>  
                    <li>Grooming supplies</li>
                    <li>Dental hygiene supplies</li>
                    <li>Kennel bed and/or mat</li>
                    <li>Flea & tick preventive</li>
                    <li>Dog safe surface cleaners</li>
                  </ul>
                  <br>
                  <p>Some other things are optional such as: Dog clothes, Dog multivitamins, and depending if, how,  and where you're potty training your new dog you might need potty training pads. </p>`
topDiv.append(list)

const middleDiv = document.createElement("div")
middleDiv.classList.add("middleDiv")
middleDiv.innerHTML = `<p>Whether you got a puppy or an older dog knowing the right feeding portions is important to keep your dog healthy.</p> 
    <br> 
    <ul>
        <li>Puppies eight to 12 weeks old need four meals a day.</li>
        <li>Puppies three to six months old need 3 meals a day.</li>
        <li>Puppies six monthst to one year need two meals a day</li>
        <li>Once your dog reaches the one year old mark depending on the size of the feeding 1-2 times per day.</li>
        <li>If your dog is prone to bloating or is a large canine, two smaller meals a day are better</li>
     </ul>
     <br>
     <h5>Dry dog food may be mixed with water, broth or canned food </h5>`

const bottomDiv = document.createElement("div")
bottomDiv.classList.add("bottomDiv")
bottomDiv.innerHTML = `<p>There is so much more to learn when it comes to owning a dog and making sure you do your research on the breed your dog is, it will make it so much easier on learning temperament and needs. Vaccinations are needed on any dog as well as constant grooming. Giving your dog a proper happy life style is the goal. Female dogs should be spayed and male dogs neutered by six months of age. Most importantly don't forget to do as much research as you can on the breed and give tons of buttrubs and kisses to your furry friend. </p>
<br> 
<h5>If you suspect your dog has ingested a poisonous substance, call your veterinarian or call the pet poison helpline 24/7 at
<a href="tel:800-213-6680">800-213-6680</a> </h5>
<br>
<h6>~ Some of my favorite must haves in the links below ~</h6`

middlePnl.append(topDiv)
middlePnl.append(middleDiv)
middlePnl.append(bottomDiv)

main.append(middlePnl)

const rightPnl = document.createElement("div")
rightPnl.classList.add("rightpnl")
const rightImgs = document.createElement("div")
rightImgs.classList.add("rightimgs")

const dogImg3 = document.createElement("img")
dogImg3.classList.add("dogimgs")
dogImg3.src = "imgs/dog3.jpg"
rightImgs.append(dogImg3)

const dogImg4 = document.createElement("img")
dogImg4.classList.add("dogimgs")
dogImg4.src = "imgs/dog4.jpg"
rightImgs.append(dogImg4)

rightPnl.append(rightImgs)
main.append(rightPnl)






