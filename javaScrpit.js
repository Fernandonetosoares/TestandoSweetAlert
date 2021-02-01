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

