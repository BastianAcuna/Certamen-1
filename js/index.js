tinymce.init({
    selector: '#detalles-txt',
    height: 150,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  

let comuna = document.querySelector("#comuna-select");

let viñaDelMar=document.createElement("option")
let quilpue=document.createElement("option")
let santiago=document.createElement("option")
let oSantiago=document.createElement("option")

viñaDelMar.innerHTML="Viña del Mar";
quilpue.innerHTML="Quilpué";
santiago.innerHTML="Santiago";
oSantiago.innerHTML="Otro que no sea santiago";


comuna.appendChild(viñaDelMar)
comuna.appendChild(quilpue)
comuna.appendChild(santiago)
comuna.appendChild(oSantiago)


const reos=[];
const tabla =()=>{
    let tbody = document.querySelector("#tbody-tabla");
    tbody.innerHTML=""
    for(let i=0; i<reos.length;++i ){
        let r =reos[i];

        let tr = document.createElement("tr");
        
        let tdN= document.createElement("td");
        let tdnombre= document.createElement("td");
        let tddetalles=document.createElement("td");
        let tdcomuna= document.createElement("td");
        let tdgravedad= document.createElement("td");
        
        tdN.innerText=i+1;
        tdnombre.innerText=r.nombre;
        tddetalles.innerHTML=r.detalles;
        tdcomuna.innerText=r.comuna;
        let gravedad =document.createElement("i");
        if (r.crimenes<4){
            gravedad.classList.add("fas","fa-exclamation-circle","text-primary","fa-2x");
        }else if ( r.crimenes>3 && r.crimenes<7){
            gravedad.classList.add("fas","fa-exclamation-triangle","text-danger","fa-2x");
        }else if ( r.crimenes>6 && r.crimenes<15){
            gravedad.classList.add("fas","fa-radiation-alt","text-dark","fa-2x");
        }else if ( r.crimenes>14){
            gravedad.classList.add("fas","fa-biohazard","text-success","fa-2x");
        };         
        tdgravedad.classList.add("text-center");
        tdgravedad.appendChild(gravedad);
        tr.appendChild(tdN);
        tr.appendChild(tdnombre);
        tr.appendChild(tddetalles);
        tr.appendChild(tdcomuna);
        tr.appendChild(tdgravedad);

        tbody.appendChild(tr);

    }
}


document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let apellido = document.querySelector("#apellido-txt").value;
    let crimenes = document.querySelector("#crimenes-num").value;
    let detalles= tinymce.get("detalles-txt").getContent();
    let comunaa = document.querySelector("#comuna-select").value;

    let reo= {};
    reo.nombre= nombre+ " " + apellido;
    reo.crimenes=crimenes;
    reo.detalles=detalles;
    reo.comuna=comunaa;
    reos.push(reo);
    tabla();
    Swal.fire("Completado", "Reo registrado", "success");
});
