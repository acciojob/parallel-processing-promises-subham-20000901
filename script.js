//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const error = document.getElementById("error");
const loading = document.getElementById("loading");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url){
	return new Promise((resolve,reject) => {
		const img = new Image();
		img.src = url;
		 img.onload = () => resolve(img);
		img.onerror =() => reject("Failed to load image" + url);
		
	});
}

function downloadImages() {
	output.innerHTML = "";
	error.innerText = "";
	loading.innerText = "Loading...";

	const promises = images.map(image => downloadImage(image.url));

	Promise.all(promises).then((result) => {
		loading.innerText = "";
		result.forEach(image => {
			output.appendChild(image);
		});
	});
	
}
btn.addEventListener('click',downloadImages);