<?php
require_once ("AccesoDatos.php");
class Usuario
{
	 public static function EsValido($usuario, $clave) 
	{
      
		$conexion = AccesoDatos::DameUnObjetoAcceso();
		$resultados = $conexion->RetornarConsulta("SELECT * FROM `users` WHERE usuario='$usuario' and clave='$clave'");
		$resultados->execute();
		$fila = $resultados->fetch(PDO::FETCH_ASSOC);
		if(isset($fila["usuario"])) 
		{
		return TRUE;
		}
		else
		return FALSE;
	}
	
    public static function TraerTodos() {
      
	    $uno = new stdClass();
	    $uno->nombre = "Jose";
	    $uno->apellido = "Perez";
		
		$dos = new stdClass();
	    $dos->nombre = "Maria";
		$dos->apellido = "Sosa";
		
	    $tres = new stdClass();
	    $tres->nombre = "Pablo";
		$tres->apellido = "Gutierrez";
		
		$retorno = array($uno, $dos, $tres);
		
     	return $retorno;     
    }
}