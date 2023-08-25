const listing = document.querySelector('#listing');
const averageSpan = document.querySelector('#averageSpan');

const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose"
];

const occupations = [
  "gardener",
  "programmer",
  "teacher",
  "gardener"
];

function createFreelancer(){
  return {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: Math.floor(Math.random()*50) + 20
  };
}

const freelancers = [
  createFreelancer(),
  createFreelancer(),
];

function render(){
  const html = freelancers.map(function(freelancer){
    return `
      <div class='row'>
        <div>${freelancer.name}</div> 
        <div>${freelancer.occupation}</div> 
        <div>$${freelancer.price.toFixed(2)}</div> 
      </div>
    `;
  });
  listing.innerHTML = html.join('');
  const average = freelancers.reduce((acc, freelancer)=> {
    return acc + freelancer.price
  }, 0)/freelancers.length;
  averageSpan.innerText = average.toFixed(2);
}

render();

setInterval(function(){
  freelancers.push(createFreelancer());
  render();
}, 1000);

