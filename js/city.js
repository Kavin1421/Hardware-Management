/**
* TamilNadu Provinces & Cities/Municipalities on HTML Dropdown
*
* @ version 2.0.0
* @ author Kavinkumar K
*/
var districts = {
	'Chennai': [
		'Adyar', 'Ambattur', 'Aminjikarai', 'Anna Nagar', 'Ashok Nagar', 'Chetpet',
		'Choolai', 'Egmore', 'Guindy', 'K.K. Nagar', 'Kilpauk', 'Kodambakkam',
		'Kodungaiyur', 'Kolathur', 'Korattur', 'Madhavaram', 'Mambalam', 'Mylapore',
		'Nandanam', 'Nanganallur', 'Pallavaram', 'Purasaiwakkam', 'Royapuram',
		'Saidapet', 'Tambaram', 'Teynampet', 'Thiruvanmiyur', 'Tondiarpet',
		'Vadapalani', 'Valasaravakkam', 'Virugambakkam', 'Villivakkam', 'Washermanpet'
	],
	'Coimbatore': [
		'Gandhipuram', 'Peelamedu', 'R.S. Puram', 'Saravanampatti', 'Singanallur',
		'Town Hall', 'Ukkadam', 'Vadavalli', 'Velandipalayam'
	],
	'Madurai': [
		'Alagarkoil', 'Anna Nagar', 'Arasaradi', 'Goripalayam', 'K.K. Nagar',
		'Melur', 'Peraiyur', 'Tallakulam', 'Thirunagar', 'Vadipatti'
	],
	'Tiruchirappalli': [
		'Cantonment', 'Crawford', 'Edamalaipatti Pudur', 'K.K. Nagar', 'Lalgudi',
		'Manapparai', 'Srirangam', 'Thiruverumbur', 'Woraiyur'
	],
	'Tiruppur': [
		'Avinashi', 'Dharapuram', 'Kangeyam', 'Mangalam', 'Palladam'
	],
	'Salem': [
		'Attur', 'Edappadi', 'Mettur', 'Sankagiri', 'Vazhapadi'
	],
	'Erode': [
		'Bhavani', 'Gobichettipalayam', 'Kodumudi', 'Perundurai', 'Sathyamangalam'
	],
	'Tirunelveli': [
		'Ambasamudram', 'Nanguneri', 'Palayamkottai', 'Sankarankovil', 'Tirunelveli'
	],
	'Thoothukudi': [
		'Kovilpatti', 'Ottapidaram', 'Sathankulam', 'Srivaikuntam', 'Thoothukudi'
	],
	'Vellore': [
		'Arcot', 'Arni', 'Gudiyatham', 'Katpadi', 'Vaniyambadi'
	],
	'Madras': [
		'Pudupakkam', 'Pallikaranai', 'Ponneri', 'Kolathur', 'Gummidipoondi'
	],
	'Salem North': [
		'Mettur', 'Attur', 'Valapady', 'Omalur', 'Yercaud'
	],
	'Tiruchirappalli South': [
		'Lalgudi', 'Manachanallur', 'Manapparai', 'Musiri', 'Thottiyam'
	],
	'Kanyakumari': [
		'Agastheeswaram', 'Kanniyakumari', 'Thovalai', 'Killiyur', 'Thuckalay'
	],
	'Dharmapuri': [
		'Dharmapuri', 'Hosur', 'Harur', 'Palacode', 'Pappireddipatti'
	],
	'Viluppuram': [
		'Tindivanam', 'Viluppuram', 'Gingee', 'Kallakurichi', 'Vikravandi'
	],
	'Virudhunagar': [
		'Aruppukkottai', 'Kariapatti', 'Rajapalayam', 'Sattur', 'Srivilliputhur'
	],
	'Cuddalore': [
		'Cuddalore', 'Chidambaram', 'Panruti', 'Tittakudi', 'Vriddhachalam'
	],
	'Kancheepuram': [
		'Kancheepuram', 'Chengapattu'],
		
 }

 var City = function() {

	this.p = [],this.c = [],this.a = [],this.e = {};
	window.onerror = function() { return true; }
	
	this.getProvinces = function() {
		for(let province in cities) {
			this.p.push(province);
		}
		return this.p;
	}
	this.getCities = function(province) {
		if(province.length==0) {
			console.error('Please input province name');
			return;
		}
		for(let i=0;i<=cities[province].length-1;i++) {
			this.c.push(cities[province][i]);
		}
		return this.c;
	}
	this.getAllCities = function() {
		for(let i in cities) {
			for(let j=0;j<=cities[i].length-1;j++) {
				this.a.push(cities[i][j]);
			}
		}
		this.a.sort();
		return this.a;
	}
	this.showProvinces = function(element) {
		var str = '<option selected disabled>Select Province</option>';
		for(let i in this.getProvinces()) {
			str+='<option>'+this.p[i]+'</option>';
		}
		this.p = [];		
		document.querySelector(element).innerHTML = '';
		document.querySelector(element).innerHTML = str;
		this.e = element;
		return this;
	}
	this.showCities = function(province,element) {
		var str = '<option selected disabled>Select City / Municipality</option>';
		var elem = '';
		if((province.indexOf(".")!==-1 || province.indexOf("#")!==-1)) {
			elem = province;
		}
		else {
			for(let i in this.getCities(province)) {
				str+='<option>'+this.c[i]+'</option>';
			}
			elem = element;
		}
		this.c = [];
		document.querySelector(elem).innerHTML = '';
		document.querySelector(elem).innerHTML = str;
		document.querySelector(this.e).onchange = function() {		
			var Obj = new City();
			Obj.showCities(this.value,elem);
		}
		return this;
	}
}
