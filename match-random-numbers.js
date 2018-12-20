
<meta charset = "utf-8">
<script>
        var x, y, res, answer;
        for (i =0, i < 10; i++){
            x = Math.floor(Math.random() *13) + 3;
            y = Math.floor(Math.random() *13) + 3;
            res = x * y;
            answer = +prompt(x + "*" + y "=?");

            if (res == answer){
                console.log('Молодец');
            }
                else{
                    console.log('Балбес! ' + x + '*' + y '=' + res);
                }
            }                
            </script>        
