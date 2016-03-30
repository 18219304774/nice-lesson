<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-02-21 15:19:52
 * @version $Id$
 */

$database_location="localhost";
$database_user_name="fudongwei";
$database_password="fdw2691893";
$database_name="xuan";

$connect=mysql_connect($database_location,$database_user_name,$database_password);
$name=mysql_query("set character set 'utf8'");
mysql_query("set names utf8");

if(mysql_select_db($database_name)){
	//echo yes;
}else{
	$create_database="create database ".$database_name;
	echo $create_database;
	mysql_query($create_database);
	mysql_select_db($database_name);
}


?>