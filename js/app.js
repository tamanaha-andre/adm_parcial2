const appTiendaOnline = new Vue({
    el: '.app',
    data: {
        productos: [
            {
                "id": 0,
                "indumentaria_cat": 1,
                "modelo": "Blusa Rosa Blei",
                "precio": 9500,
                "imagen": "./img/blu01.jpg",
                "img_alt":"Blusa de escote con volados volant",
            },
            {
                "id": 1,
                "indumentaria_cat": 1,
                "modelo": "Blusa Capri",
                "precio": 7000,
                "imagen": "./img/blu02.jpg",
                "img_alt": "Blusa amarilla calada y cuello solapa.",
            },
            {
                "id": 2,
                "indumentaria_cat": 1,
                "modelo": "Blusa Constance",
                "precio": 8990,
                "imagen":  "./img/blu03.jpg",
                "img_alt": "Blusa blanca calada y escote redondo.",
            },
            {
                "id": 3,
                "indumentaria_cat": 1,
                "modelo": "Camisa Gandha Sounds",
                "precio": 8200,
                "imagen": "./img/blu04.jpg",
                "img_alt": "Blusa negra",
            },
            {
                "id": 4,
                "indumentaria_cat": 2,
                "modelo": "Vestido azul bordada",
                "precio": 10500,
                "imagen": "./img/ves01.jpg",
                "img_alt":"Vestido azul bordado en hilo oro y mangas media.",
            },
            {
                "id": 5,
                "indumentaria_cat": 2,
                "modelo": "Vestido Ikat",
                "precio": 12500,
                "imagen": "./img/ves02.jpg",
                "img_alt":"Vestido corto liso de broderie con mangas largas.",
            },
            {
                "id": 6,
                "indumentaria_cat": 2,
                "modelo": "Vestido Plain",
                "precio": 11300,
                "imagen": "./img/ves03.jpg",
                "img_alt": "Vestido corto liso de broderie con mangas largas.",
            },
            {
                "id": 7,
                "indumentaria_cat": 2,
                "modelo": "Vestido corto Niran",
                "precio": 10200,
                "imagen": "./img/ves04.jpg",
                "img_alt":"Vestido corto estampado, con mangas babuchas.",
            },
            {
                "id": 8,
                "indumentaria_cat": 3,
                "modelo": "Bote Negra",
                "precio": 4200.5,
                "imagen": "./img/rem01.jpg",
                "img_alt":"Remera de hilo negra lisa.",
            },
            {
                "id": 9,
                "indumentaria_cat": 3,
                "modelo": "Remera alas",
                "precio": 5100,
                "imagen": "./img/rem02.jpg",
                "img_alt":"Remera espampa vuelo.",
            },
            {
                "id": 10,
                "indumentaria_cat": 3,
                "modelo": "Remera blanca",
                "precio": 3500.5,
                "imagen": "./img/rem03.jpg",
                "img_alt": "Remera blanca con cristales.",
            },
            {
                "id": 11,
                "indumentaria_cat": 3,
                "modelo": "Remera calada",
                "precio": 3200.5,
                "imagen": "./img/rem04.jpg",
                "img_alt": "Remera canela.",
            }
                ],
        filtro: '',
        filtroCategoria: [
            {
                "id": 0,
                "indumentaria_cat": 1,
                "modelo": "Blusa Rosa Blei",
                "precio": 9500,
                "imagen": "./img/blu01.jpg",
                "img_alt":"Blusa de escote con volados volant",
            },
            {
                "id": 1,
                "indumentaria_cat": 1,
                "modelo": "Blusa Capri",
                "precio": 7000,
                "imagen": "./img/blu02.jpg",
                "img_alt": "Blusa amarilla calada y cuello solapa.",
            },
            {
                "id": 2,
                "indumentaria_cat": 1,
                "modelo": "Blusa Constance",
                "precio": 8990,
                "imagen":  "./img/blu03.jpg",
                "img_alt": "Blusa blanca calada y escote redondo.",
            },
            {
                "id": 3,
                "indumentaria_cat": 1,
                "modelo": "Camisa Gandha Sounds",
                "precio": 8200,
                "imagen": "./img/blu04.jpg",
                "img_alt": "Blusa negra",
            },
            {
                "id": 4,
                "indumentaria_cat": 2,
                "modelo": "Vestido azul bordada",
                "precio": 10500,
                "imagen": "./img/ves01.jpg",
                "img_alt":"Vestido azul bordado en hilo oro y mangas media.",
            },
            {
                "id": 5,
                "indumentaria_cat": 2,
                "modelo": "Vestido Ikat",
                "precio": 12500,
                "imagen": "./img/ves02.jpg",
                "img_alt":"Vestido corto liso de broderie con mangas largas.",
            },
            {
                "id": 6,
                "indumentaria_cat": 2,
                "modelo": "Vestido Plain",
                "precio": 11300,
                "imagen": "./img/ves03.jpg",
                "img_alt": "Vestido corto liso de broderie con mangas largas.",
            },
            {
                "id": 7,
                "indumentaria_cat": 2,
                "modelo": "Vestido corto Niran",
                "precio": 10200,
                "imagen": "./img/ves04.jpg",
                "img_alt":"Vestido corto estampado, con mangas babuchas.",
            },
            {
                "id": 8,
                "indumentaria_cat": 3,
                "modelo": "Bote Negra",
                "precio": 4200.5,
                "imagen": "./img/rem01.jpg",
                "img_alt":"Remera de hilo negra lisa.",
            },
            {
                "id": 9,
                "indumentaria_cat": 3,
                "modelo": "Remera alas",
                "precio": 5100,
                "imagen": "./img/rem02.jpg",
                "img_alt":"Remera espampa vuelo.",
            },
            {
                "id": 10,
                "indumentaria_cat": 3,
                "modelo": "Remera blanca",
                "precio": 3500.5,
                "imagen": "./img/rem03.jpg",
                "img_alt": "Remera blanca con cristales.",
            },
            {
                "id": 11,
                "indumentaria_cat": 3,
                "modelo": "Remera calada",
                "precio": 3200.5,
                "imagen": "./img/rem04.jpg",
                "img_alt": "Remera canela.",
            }
        ],
        modelo: '',
        categoria: '',
        precio: '',
        selectCat: '',
        carrito: [],
        total: 0,
        form: false,
        foco: null,
    },
    created(){
        this.carrito = localStorage.getItem('productos') ? JSON.parse(localStorage.getItem('productos')) : [];
        this.total = localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : [];
        
    },
    computed:{
        contador: function(){
            return this.carrito.length;
        },
    },


    methods: {
        agregar: function(){
            if (!(this.modelo.length == 0 || this.categoria.length == 0 || this.precio.length == 0)) {
                if (this.foco == null) {
                    this.filtroCategoria.push({
                        modelo: this.modelo,
                        indumentaria_cat: this.categoria,
                        precio: this.precio,
               
                    });

                }else{
                    this.filtroCategoria[this.foco].modelo = this.modelo;
                    this.filtroCategoria[this.foco].indumentaria_cat = this.categoria;
                    this.filtroCategoria[this.foco].precio = this.precio;
                
                    this.foco = null;
                };
                
                this.modelo = '';
                this.categoria = '';
                this.precio = '';
          
            };
        },
        editar: function(index){

            this.foco = parseInt(index);
            this.modelo = this.filtroCategoria[index].modelo;
            this.categoria = this.filtroCategoria[index].indumentaria_cat;
            this.precio = this.filtroCategoria[index].precio;
            
            if (!this.form) {
                this.form = !this.form;   
            }
        },

        //---------------------> Filtrado de Cards

        cambio: function(){
            console.log('cambio');
            this.filtroCategoria = [];
           if (this.selectCat == 4) {
               
                this.productos.forEach(indumentaria => {  
                    this.filtroCategoria.push(indumentaria);
                });

            }else{

                if (this.selectCat == '' && this.filtro == '' || this.selectCat == 5) {
                    //---------------------> No se hace ningun filtro
                    console.log('entro');
                    this.productos.forEach(indumentaria => {
                        this.filtroCategoria.push(indumentaria);
                    });

                    if (!(this.filtro == '')) {
                        this.filtroCategoria = [];
                        let filtro2 = this.productos.filter(indumentaria => indumentaria.modelo.toLowerCase().includes(this.filtro.toLowerCase()));
    
                        filtro2.forEach(obj => {
                        this.filtroCategoria.push(obj);
                    });
                    }   

                }else if(this.selectCat == ''){
                    //---------------------> Se filtra solo por el buscador
                    let filtro2 = this.productos.filter(indumentaria => indumentaria.modelo.toLowerCase().includes(this.filtro.toLowerCase()));
    
                    filtro2.forEach(obj => {
                        this.filtroCategoria.push(obj);
                       });
                }else{
                    //---------------------> Se filtra por categoria
                    let filtro1 = this.productos.filter(indumentaria => indumentaria.indumentaria_cat == this.selectCat);
                    let filtro2 = filtro1.filter(indumentaria => indumentaria.modelo.toLowerCase().includes(this.filtro.toLowerCase()));
    
                    filtro2.forEach(obj => {
                        this.filtroCategoria.push(obj);
                    });
                }

            }
        },

        agregarCarrito: function(indumentaria) {
            console.log(indumentaria);          
            if (this.carrito.length != 0) {
                //---------------------> carrito lleno, sumo si esta
                let bandera = false;

                this.carrito.forEach(item => {

                    if (item.id == indumentaria.id ) {
                        bandera = true;
                        item.cantidad++;
                        let objStr = JSON.stringify(this.carrito);
                        localStorage.setItem('productos', objStr);
                    } 
                }); 

                if (bandera == false) {
                //---------------------> Agrego al carrito
                    console.log('agrego');
                    this.carrito.push({ 
                        id: indumentaria.id,
                        modelo: indumentaria.modelo,
                        precio: indumentaria.precio,
                        imagen: indumentaria.imagen,
                        img_alt: indumentaria.img_alt,
                        cantidad: 1,
                    });

                    let objStr = JSON.stringify(this.carrito);
                    localStorage.setItem('productos', objStr);

                }

                bandera = false;

                //---------------------> Sumo el total de los productos agregados al carrito
                if (this.carrito.length > 0) {
                    this.total = 0;
                    this.carrito.forEach(item => {
                        this.total += item.precio * item.cantidad;;
                    });

                //---------------------> Guardo el total en el LocalStorage
                    localStorage.setItem('total', JSON.stringify(this.total));
                }

            } else {
                //---------------------> Carrito vacio
                console.log('agrego');
                this.carrito.push({ 
                    id: indumentaria.id,
                    modelo: indumentaria.modelo,
                    precio: indumentaria.precio,
                    imagen: indumentaria.imagen,
                    img_alt: indumentaria.img_alt,
                    cantidad: 1,
                });

                //---------------------> Guardo el carrito en el LocalStorage
                let objStr = JSON.stringify(this.carrito);
                localStorage.setItem('productos', objStr);
                
                if (this.carrito.length > 0) {
                    this.total = 0;
                    this.carrito.forEach(item => {
                        this.total += item.precio * item.cantidad;
                    });

                    localStorage.setItem('total', JSON.stringify(this.total));
    
                }
            };
        },

        eliminar: function(i){
            this.filtroCategoria.splice(i,1); 
        },

        eliminarCarrito: function(i){

            this.total -= (this.carrito[i].precio * this.carrito[i].cantidad);
            this.carrito.splice(i,1); 

            localStorage.setItem('total', JSON.stringify(this.total));
            localStorage.setItem('productos', JSON.stringify(this.carrito));

        },
        mostrarForm: function(){
            this.form = !this.form;
        },
    },
})


Vue.component('estructura-planilla' , {
    data: function() {
      return{
        lista:[],
        diseño: '',
        cantidad: ''
      }
        
    },
  
    template: `
    <div>
    
      <div>
        <label class="mb-2">Modelo</label>
        <input type="text" class="form-control mb-2" placeholder="Ingrese el modelo" v-model="diseño"></input>
  
        <label class="mb-2">Cantidad Pedida</label>
        <input type="number" class="form-control" placeholder="Ingrese la cantidad" v-model="cantidad"></input>
 
        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" value="cargar" class="btnC mb-5 mt-4" @click="agregarProducto">Cargar</button>
        </div>
      </div>
      
      <div>
        <h4 class="text-center">Planilla de Productos</h4>
        <table class="table">
          <tr>
            <th class="mb-2">Modelo</th>
            <th class="mb-2">Cantidad</th>
          </tr>
          <tr v-for="item in lista">
            <th :style="item.estado ? 'color:green;' : 'color: black;'">{{item.diseño}}</th>
            <th :style="item.estado ? 'color:green;' : 'color: black;'">{{item.cantidad}}</th>
          </tr>
        </table>
      </div>  
    </div>
    
    `,
  
    methods: {
        agregarProducto: function() {
        pidemasdeuno = false;
  
        if(this.diseño != "" && this.cantidad != "") {
          if(this.cantidad >= 2) {
          this.pidemasdeuno = true;
          }
          this.lista.push({
            diseño: this.diseño,
            cantidad: this.cantidad,
            estado: this.pidemasdeuno
          })
          this.diseño = "";
          this.cantidad = ""
        }
  
        this.pidemasdeuno = false
      }
    }
  })
