  mapboxgl.accessToken = 'pk.eyJ1IjoibWFydGluZnJvbnQiLCJhIjoiY2plYmg3bzZkMTN5bDMzbXFxaTZ4dTlrYyJ9.y4zfN6b-JtG0fbItpQrlDw';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/martinfront/cjer31qodi3u42ro6j7o1m2bg',
      center: [18.066, 59.333],
      zoom: 5,
    });

    var stores = {
      "type": "FeatureCollection",
      "features": [{
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [18.0738,
              59.3120
            ]
          },
          "properties": {
            "img": "https://utflykterochresor.files.wordpress.com/2013/10/pa041418.jpg",
            "url": "https://vasakronan.se/lokalobjekt/stockholm-3-2-2/gotgatan-78",
            "title": "Skrapan",
            "adress": "Adress: Götgatan 74-80 / Vartoftagatan 21-51",
            "area": "Södermalm, Stockholm",
            "kommun": "Kommun: Stockholm",
            "byggt": "Byggt/ombyggt: 1959/2006",
            "butik": "Butik: 6759 m²",
            "kontor": "Kontor: 7647 m²",
            "ovrigt": "203 m²"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [18.074903218075633,
              59.33428931827596
            ]
          },
          "properties": {
            "img": "https://media.vasakronan.se/bilder/Styckjunkaren_11_683_Bild6.jpg",
            "url": "https://vasakronan.se/lokalobjekt/stockholm-3-2-2/birger-jarlsgatan-6-d-2",
            "title": "Birger Jarlsgatan 6D & 10",
            "adress": "Adress: Birger Jarlsgatan 6D & 10",
            "area": "City, Stockholm",
            "kommun": "Kommun: Stockholm",
            "byggt": "Byggt/ombyggt: 1891/1984",
            "butik": "Butik: 153 m²",
            "kontor": "Kontor: 1345 m²",
            "ovrigt": "Övrigt: 117 m²"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",//Gallerian
            "coordinates": [18.067484,
              59.331709
            ]
          },
          "properties": {
            "url": "http://gallerian.se/",
            "img": "https://media.vasakronan.se/bilder/Blamannen_20_596_Huvudbild.jpg",
            "title": "Gallerian",
            "adress": "Adress: Hamngatan 29-33",
            "area": "City, Stockholm",
            "kommun": "Kommun: Stockholm",
            "byggt": "Byggt/ombyggt: 1975/1995",
            "butik": "Butik: 4725 m²",
            "kontor": "Kontor: 21721 m²",
            "ovrigt": "Övrigt: 1746 m²"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [18.0612,
              59.3330
            ]
          },
          "properties": {
            "url": "https://vasakronan.se/lokalobjekt/stockholm-3-2-2/master-samuelsgatan-56",
            "img": "https://media.vasakronan.se/bilder/Blamannen_20_596_Bild2.jpg",
            "title": "Mäster Samuelsgatan 56",
            "adress": "Adress: Mäster Samuelsgatan 56",
            "area": "City, Stockholm",
            "kommun": "Kommun: Stockholm",
            "byggt": "Byggt/ombyggt: 2000/2000/2003",
            "butik": "Butik: 15866 m²",
            "kontor": "Kontor: 33109 m²",
            "ovrigt": "Övrigt: 10125 m²"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [18.072764575481415,
              59.33287067023284
            ]
          },
          "properties": {
            "url": "https://vasakronan.se/lokalobjekt/stockholm-3-2-2/hamngatan-13-2",
            "img": "https://media.vasakronan.se/bilder/Styrpinnen_12_645_Bild5.jpg",
            "title": "Hamngatan 13",
            "adress": "Adress: Hamngatan 13",
            "area": "City, Stockholm",
            "kommun": "Kommun: Stockholm",
            "byggt": "Bygggt/ombyggt: 1979/1995",
            "butik": "Butik: 320 m²",
            "kontor": "Kontor: 1902 m²",
            "ovrigt": "Övrigt: 10 m²"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [18.063611118122935,
              59.334590277457245
            ]
          },
          "properties": {
            "url": "https://vasakronan.se/lokalobjekt/stockholm-3-2-2/sveavagen-17-13-tr",
            "img": "https://media.vasakronan.se/bilder/Beridarebanan_77_14170_Bild3.jpg",
            "title": "Sveavägen 17, 13tr",
            "adress": "Adress: Sveavägen 17 / Sergelgatan 20-22 / Hötorget 2-4",
            "area": "City, Stockholm",
            "kommun": "Kommun: Stockholm",
            "byggt": "Byggt/ombyggt: 1958/1996",
            "butik": "Butik: 5507 m²",
            "kontor": "Kontor: 8669 m²",
            "ovrigt": "3203 m²"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [18.06897109374404,
              59.33059551117337
            ]
          },
          "properties": {
            "url": "https://vasakronan.se/lokalobjekt/stockholm-3-2-2/jakobsgatan-6",
            "img": "https://media.vasakronan.se/bilder/Jakob_Storre_18_694_Bild1.jpg",
            "title": "Jakobsgatan 2-8",
            "adress": "Adress: Jakobsgatan 2-8 / Regeringsgatan 8-24",
            "area": "City, Stockholm",
            "kommun": "Kommun: Stockholm",
            "byggt": "Byggt/ombyggt: 1975/1996/2009",
            "butik": "Butik: 1242 m²",
            "kontor": "Kontor: 20604 m²",
            "ovrigt": "Övrigt: 4744 m²",
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [18.0721,
              59.3323
            ]
          },
          "properties": {
            "url": "https://vasakronan.se/lokalobjekt/stockholm-3-2-2/kungstradgardsgatan-16",
            "img": "https://media.vasakronan.se/bilder/Kungstradgardsgatan_16_14024-F0004_Bild4.jpg",
            "title": "Kungsträdgårdsgatan 16",
            "adress": "Adress: Kungsträdgårdsgatan 16",
            "area": "City, Stockholm",
            "kommun": "Kommun: Stockholm",
            "byggt": "Byggt/ombyggt: 1901/1978/1990",
            "butik": "Butik: Info saknas",
            "kontor": "3444 m²",
            "ovrigt": "203 m²",
          }
        }
      ]
    };
    // This will let you use the .remove() function later on
    if (!('remove' in Element.prototype)) {
      Element.prototype.remove = function () {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
    
    var layerList = document.getElementById('menu');
    var inputs = layerList.getElementsByTagName('input');
    myFunction = () => {
      location.reload();
      //e();
    }
    function switchLayer(layer) {
      var layerId = layer.target.id;
        if (layerId === 'basic') {
          map.setStyle('mapbox://styles/martinfront/cjer31qodi3u42ro6j7o1m2bg')
          myFunction();
        }
        else if (layerId === 'satellite') {
          map.setStyle('mapbox://styles/martinfront/cjer33gvrfol02rmtkcpmice9')
        }
    }
    for (var j = 0; j < inputs.length; j++) {
        inputs[j].onclick = switchLayer;
    }
    /* Videoframe */ 
    var video = [18.065339, 59.332591]
    var popup = new mapboxgl.Popup()
    .setHTML(
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/fQGbXmkSArs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
    var el = document.createElement('div');
    el.id = 'marker';
    new mapboxgl.Marker(el)
    .setLngLat(video)
    .setPopup(popup)
    .addTo(map);

    // This adds the data to the map
    map.on('style.load', function (e) {
      map.addSource("places", {
        "type": "geojson",
        "data": stores
      });
      // Initialize the list
      buildLocationList(stores);
    });
    // This is where your interactions with the symbol layer used to be
    // Now you have interactions with DOM markers instead
    stores.features.forEach(function (marker, i) {
      // Create an img element for the marker
      var el = document.createElement('div');
      el.id = "marker-" + i;
      el.className = 'marker';
      // Add markers to the map at all points
      new mapboxgl.Marker(el, {
          offset: [0, -23]
        })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

      el.addEventListener('click', function (e) {
        // 1. Fly to the point
        flyToStore(marker);
        // 2. Close all other popups and display popup for clicked store
        createPopUp(marker);
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');

        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }

        var listing = document.getElementById('listing-' + i);
        listing.classList.add('active');

      });
    });
    /* Interface addons */
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    function flyToStore(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
      });
    }

    function createPopUp(currentFeature) {
      var popUps = document.getElementsByClassName('mapboxgl-popup');
      if (popUps[0]) popUps[0].remove();

      var popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(
        '<div class="card card-select" data-cardSelect>' +
          '<div class="card-divider">' + currentFeature.properties.title +
          '</div>' +
          '<img id="card-img" src="' + currentFeature.properties.img +'">' +
          '<div class="card-section">' +
            '<p>' + currentFeature.properties.adress + '</p>' +
            '<p>' + currentFeature.properties.kommun + '</p>' +
            '<p>' + currentFeature.properties.byggt + '</p>' +
            '<p>' + currentFeature.properties.butik + '</p>' +
            '<p>' + currentFeature.properties.kontor + '</p>' +
            '<p>' + currentFeature.properties.ovrigt + '</p>' +
          '</div>' + 
        '</div>')
        .addTo(map);
    }

    function buildLocationList(data) {
      for (i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];
        var prop = currentFeature.properties;

        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.className = 'item';
        listing.id = "listing-" + i;

        var pictures = listing.appendChild(document.createElement('div'));
        pictures.innerHTML = '<img class="thumbnail" src="' + prop.img + '">';

        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.dataPosition = i;
        link.innerHTML = prop.title;

        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.adress + '<br>' + prop.area;

        var linkButton = listing.appendChild(document.createElement('a'));
        linkButton.innerHTML = '<a class="button" href="' + prop.url + '"target="_blank">' + '<span>' + "Kontakta oss" + '</span>' + '</a>';
        

        link.addEventListener('click', function (e) {
          var clickedListing = data.features[this.dataPosition];
          flyToStore(clickedListing);
          createPopUp(clickedListing);
          
          var activeItem = document.getElementsByClassName('active');

          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          this.parentNode.classList.add('active');
        });
      }
    }