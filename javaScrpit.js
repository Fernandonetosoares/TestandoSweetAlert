var nome = window.prompt('Qual é o seu nome?')
window.alert(`Seja bem vindo ${nome}`)

function confirmar(){
    var nome = document.getElementById('txtn')
    var res = document.getElementById("res")
    var n = (nome.value)

    res.style.textAlign = 'center'
    res.innerHTML = `Seja bem vindo ${n}`
}  

function clicar() {
    Swal.fire('Menssagem Simples')
}
function erro(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...', 
        text: ' Ocorreu um erro inesperado',
        footer:'Tente novamente'  
    })
}
function pergunta(){
    Swal.fire(
        'Você Clicou?',
        'Tem certeza?',
        'question'
    )
}
function salvar(){
    Swal.fire({
        title:'Você deseja salvar as mudanças?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Salvar`,
        denyButtonText: `Não Salvar`,
    }).then((result) => {
        if(result.isConfirmed){
            Swal.fire('Salvo!!','','success')
        }else if (result.isDenied){
            Swal.fire('As Mudanças não foram Salvas!','', 'info')

        }
    })
}

function ok(){
    Swal.fire({
        position:'top-end',
        icon:'success',
        title: 'Seu trabalho foi salvo com sucesso',
        showConfirmButton: false,
        timer: 1500
    })
}
function deletar(){
    Swal.fire({
        title: 'Você tem certeza?',
        text:'Você não poderá reverter esta ação',
        icon:'warning',
        showCancelButton: true,
        confirmButtonColor:'#3085d6',
        cancelButtonColor:'#d33',
        confirmeButtonText: 'Sim, delete isto',
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deletado!',
            'Seu arquivo foi deletado.',
            'success'
          )
        }
    })
}
function delet(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Você tem certeza?',
        text: "Você não poderá reverter isto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, delete isso!',
        cancelButtonText: 'Não, cancele!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deletado!',
            'Seu arquivo foi deletado.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Seu arquivo foi salvo :)',
            'error'
          )
        }
      })
}
function timer(){
    let timerInterval
Swal.fire({
  title: 'Alerta de tempo!',
  html: 'Isto se fechara em <b></b> millisegundos.',
  timer: 5000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}

function perfil(){
    Swal.fire({
        title: 'Diga seu usuario no Github',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confira',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
}

function vetor(){
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'Questão 1',
          text: 'Insira a seguir os 3 vetores'
        },
        'Questão 2',
        'Questão 3'
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: 'Pronto!',
            html: `
              Sua resposta:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'Ótimo!'
          })
        }
      })
}

function descobre(){
    const ipAPI = '//api.ipify.org?format=json'

Swal.queue([{
  title: 'Seu IP Público',
  confirmButtonText: 'Mostre meu IP público',
  text:
    'Seu IP Público será recebido ' +
    'Via requisição ',
  showLoaderOnConfirm: true,
  preConfirm: () => {
    return fetch(ipAPI)
      .then(response => response.json())
      .then(data => Swal.insertQueueStep(data.ip))
      .catch(() => {
        Swal.insertQueueStep({
            icon: 'error',
          title: 'Unable to get your public IP'
        })
      })
  }
}])
}
