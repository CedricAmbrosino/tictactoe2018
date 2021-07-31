	var titre = document.getElementById('titre');
	var bloc1=document.getElementById('bloc1');
	var bloc2=document.getElementById('bloc2');
	var bloc3=document.getElementById('bloc3');
	var bloc4=document.getElementById('bloc4');
	var bloc5=document.getElementById('bloc5');
	var bloc6=document.getElementById('bloc6');
	var bloc7=document.getElementById('bloc7');
	var bloc8=document.getElementById('bloc8');
	var bloc9=document.getElementById('bloc9');
	var player=1;
	
	
	bloc1.addEventListener('click',clicBloc);
	bloc2.addEventListener('click',clicBloc);
	bloc3.addEventListener('click',clicBloc);
	bloc4.addEventListener('click',clicBloc);
	bloc5.addEventListener('click',clicBloc);
	bloc6.addEventListener('click',clicBloc);
	bloc7.addEventListener('click',clicBloc);
	bloc8.addEventListener('click',clicBloc);
	bloc9.addEventListener('click',clicBloc);
	
	function clicBloc(){
		if(this.firstChild.innerHTML==='O'||this.firstChild.innerHTML==='X')
		{
			
		}
		else{
			if(player==1)
			{
				console.log('Flag1');
				this.firstChild.innerHTML='O';
				player=2;
			}
			else if(player==2)
			{
				console.log('Flag2');
				this.firstChild.innerHTML='X';
				player=1;
			}	
			console.log('Player : ' + player + '|| this : ' + this.firstChild.innerHTML);
			testVictoire();
		}
		
	}

	
	function testVictoire(){
		/*Tests gauche droite*/
		if(bloc1.firstChild.innerHTML==='X'||bloc1.firstChild.innerHTML==='O')
		{
			if(bloc1.firstChild.innerHTML===bloc2.firstChild.innerHTML&&bloc1.firstChild.innerHTML===bloc3.firstChild.innerHTML)
			{
				if(bloc1.firstChild.innerHTML==='O')
				victoire(1);
				else if(bloc1.firstChild.innerHTML==='X')
				victoire(2);
			}
			if(bloc1.firstChild.innerHTML===bloc4.firstChild.innerHTML&&bloc1.firstChild.innerHTML===bloc7.firstChild.innerHTML)
			{
				if(bloc1.firstChild.innerHTML==='O')
				victoire(1);
				else if(bloc1.firstChild.innerHTML==='X')
				victoire(2);
			}
			if(bloc1.firstChild.innerHTML===bloc5.firstChild.innerHTML&&bloc1.firstChild.innerHTML===bloc9.firstChild.innerHTML)
			{
				if(bloc1.firstChild.innerHTML==='O')
				victoire(1);
				else if(bloc1.firstChild.innerHTML==='X')
				victoire(2);
			}
		}	
		if(bloc4.firstChild.innerHTML==='X'||bloc4.firstChild.innerHTML==='O')
		{

			if(bloc4.firstChild.innerHTML===bloc5.firstChild.innerHTML&&bloc4.firstChild.innerHTML===bloc6.firstChild.innerHTML)/**********/
			{
				if(bloc4.firstChild.innerHTML==='O')
				victoire(1);
				else if(bloc4.firstChild.innerHTML==='X')
				victoire(2);
			}
		}	
		if(bloc7.firstChild.innerHTML==='X'||bloc7.firstChild.innerHTML==='O')
		{
			if(bloc7.firstChild.innerHTML===bloc8.firstChild.innerHTML&&bloc7.firstChild.innerHTML===bloc9.firstChild.innerHTML)
			{
				if(bloc7.firstChild.innerHTML==='O')
				victoire(1);
				else if(bloc7.firstChild.innerHTML==='X')
				victoire(2);
			}
		}	
		if(bloc2.firstChild.innerHTML==='X'||bloc2.firstChild.innerHTML==='O')/*test hauteur case 2 5 8*/
		{
			if(bloc2.firstChild.innerHTML===bloc5.firstChild.innerHTML&&bloc2.firstChild.innerHTML===bloc8.firstChild.innerHTML)
			{
				if(bloc2.firstChild.innerHTML==='O')
				victoire(1);
				else if(bloc2.firstChild.innerHTML==='X')
				victoire(2);
			}
		}	
		if(bloc3.firstChild.innerHTML==='X'||bloc3.firstChild.innerHTML==='O')
		{
			if(bloc3.firstChild.innerHTML===bloc6.firstChild.innerHTML&&bloc3.firstChild.innerHTML===bloc9.firstChild.innerHTML)
			{
				if(bloc3.firstChild.innerHTML==='O')
				victoire(1);
				else if(bloc3.firstChild.innerHTML==='X')
				victoire(2);
			}
		}	
		if(bloc7.firstChild.innerHTML==='X'||bloc7.firstChild.innerHTML==='O')
		{
			if(bloc7.firstChild.innerHTML===bloc5.firstChild.innerHTML&&bloc7.firstChild.innerHTML===bloc3.firstChild.innerHTML)
			{
				if(bloc7.firstChild.innerHTML==='O')
				victoire(1);
				else if(bloc7.firstChild.innerHTML==='X')
				victoire(2);
			}
		}
		/*En cas d'égaliter reset*/
		if(bloc1.firstChild.innerHTML==='X'||bloc1.firstChild.innerHTML==='O')
			if(bloc2.firstChild.innerHTML==='X'||bloc2.firstChild.innerHTML==='O')
				if(bloc3.firstChild.innerHTML==='X'||bloc3.firstChild.innerHTML==='O')
					if(bloc4.firstChild.innerHTML==='X'||bloc4.firstChild.innerHTML==='O')
						if(bloc5.firstChild.innerHTML==='X'||bloc5.firstChild.innerHTML==='O')
							if(bloc6.firstChild.innerHTML==='X'||bloc6.firstChild.innerHTML==='O')
								if(bloc7.firstChild.innerHTML==='X'||bloc7.firstChild.innerHTML==='O')
									if(bloc8.firstChild.innerHTML==='X'||bloc8.firstChild.innerHTML==='O')
										if(bloc9.firstChild.innerHTML==='X'||bloc9.firstChild.innerHTML==='O')
										{
											titre.textContent = 'égalité';
											init();
										}
		
		
		
	}
	
	function victoire(v)
	{
		if(v==1)
		{
			titre.textContent = 'victoire Joueur 1';
			init();
		}
		else if(v==2)
		{
			titre.textContent = 'victoire Joueur 2';
			init();
		}
		else
			alert('erreur fct victoite');
	}
	
	function init(){
		setTimeout(function(){ titre.textContent = 'TicTacToe'; 
			bloc1.firstChild.innerHTML='';
			bloc2.firstChild.innerHTML='';
			bloc3.firstChild.innerHTML='';
			bloc4.firstChild.innerHTML='';
			bloc5.firstChild.innerHTML='';
			bloc6.firstChild.innerHTML='';
			bloc7.firstChild.innerHTML='';
			bloc8.firstChild.innerHTML='';
			bloc9.firstChild.innerHTML='';
			player=1;		
		}, 1500);
		
	}