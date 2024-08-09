$(document).ready(function() {
    $('#formulário').on('submit', function(e) {
        e.preventDefault(); 


        var tarefa = $('#nova-tarefa').val().trim();

        if (tarefa) {
            $('#form-ul').append('<li>' + tarefa + '</li>');


            $('#nova-tarefa').val('');
        }
    });

    $('#form-ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
