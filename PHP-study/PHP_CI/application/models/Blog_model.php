<?php defined('BASEPATH') OR exit('No direct script access allowed');
	class Blog_model extends CI_Model{
		public function get_all(){
			$sql="select * from blog";
			$query=$this->db->query($sql);
			return $query->result();
		}
		public function add_pass($cid,$title,$con,$uid){
			$time=date('Y-m-d',time());
			$arr=array(
				'title'=>$title,
				'content'=>$con,
				'time'=>$time,
				'uid'=>$uid,
				'catalog_id'=>$cid,
			);
			
			$query=$this->db->insert('blog',$arr);
			return $query;
		}
		public function get_writer_by_data(){
			$this->db->where('blog.uid=user.uid');
			$query=$this->db->get('blog,user');
			/*
			$this->db->select('*');
			$this->db->from('blog');
			$this->db->join('user', 'blog.uid=user.uid');
			$query = $this->db->get();*/
			return $query->result();
			/*
			$this->db->where('blog.uid=user.uid');
			$query=$this->db->get('blog,user');
			return $query->result();*/
			/*
			$sql="select * from blog,user where blog.uid=user.uid";
			$query=$this->db->query($sql);
			return $query->result();*/
		}
		
		public function get_catalog(){
			$query=$this->db->get('catalog');
			return $query->result();
		}
		public function addcata($cata){
			$arr=array(
				'catalog_name'=>$cata,
			);
			$query=$this->db->insert('catalog',$arr);
			return $query;
		}
	}


?>