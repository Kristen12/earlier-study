<?php
	defined('BASEPATH') OR exit('No direct script access allowed');//访问权限
	class User extends CI_Controller{
		public function __construct(){
			parent::__construct();//静态成员方法
			//$this->load->helper('url');
			$this->load->model("User_model");
		}//构造函数初始化
		public function index(){

		}//没跟方法则默认执行index
		public function unlogin(){
			$array_items = array('uid','uname','logged_in');

			$this->session->unset_userdata($array_items);
			redirect('Blog/index');
		}
		public function login(){
			$this->load->view('login.php');
		}
		public function do_login(){
			$uname=$this->input->post('uname');
			$pass=$this->input->post('pass');
			$mpass=md5($pass);
			//$this->load->model("User_model");
			$result=$this->User_model->get_name_by_pass($uname,$mpass);
			if($result){
				//1.设置CI-Session值
				$newdata=array(
					'uid'=>$result->uid,
					'uname'=>$result->uname,
					'logged_in'=>TRUE
				);
				$this->session->set_userdata($newdata);
				redirect('Blog/index');
			}else{
				echo "error";
			}
		} 
		public function reg(){
			$this->load->view('reg.php');
		}
		public function do_reg(){
			//echo "345";
			$name=$this->input->post('uname');


			$pass=$this->input->post('pass');
			$mpass=md5($pass);
			//拼SQL语句
			//1.加载model类
			//$this->load->model('User_model');
			//2.加载model类下面的方法
			$result=$this->User_model->insert_name($name,$mpass);
			if($result){
				//向控制器下的方法来跳，控制器分为当前控制器和另外控制器
				redirect("User/login");
			}else{
				echo "error";
			}
			//echo $name;
			//$this->input->get('id');
			//http://localhost/newphp/CI/user/do_reg/1/aaa
			//echo $this->uri->segment(3);控制器名是第一个
		}//建立方法接受uname pass
	}
?>