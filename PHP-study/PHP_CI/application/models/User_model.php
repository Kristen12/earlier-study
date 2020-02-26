<?php
	defined('BASEPATH') OR exit('No direct script access allowed');
	class User_model extends CI_Model{
		public function insert_name($name,$pass){
			//"insert into user(uid,pass)value(null,'$aaa')"
			//$query=$this->db->query($sql);
			$arr=array(
				'uname'=>$name,
				'pass'=>$pass,
			);

			
			$query=$this->db->insert('user',$arr);
			return $query;
		}
		public function get_name_by_pass($uname,$mpass){
			//返回一行row(),返回多行result()
			$sql="select * from user where uname='$uname' and pass='$mpass'";
			$query=$this->db->query($sql);
			return $query->row();
		}
	}
?>