<?php

if(isset($_POST['user_message'])){
	$filtered_mail = filter_input(INPUT_POST, 'user_mail', FILTER_SANITIZE_EMAIL);
	if($filtered_mail == FILTER_VALIDATE_EMAIL){
		echo '<p>'.$_POST['user_message'].'</p>';
	}else{
		echo '<p> Erreur lors de la validation de l\'adresse mail';
	}
}else{
	 echo '<p> Champ de texte manquant ! </p>';
}
?>