#pragma strict

function Start () {

}

function Update () {
	var motion = GetComponent(Animator);
	var state : AnimatorStateInfo = motion.GetCurrentAnimatorStateInfo(0);

	if(Input.GetKeyDown("space")){
		motion.SetBool("Jump", true);
	}

	if(state.IsName("Locomotion.JUMP00")){
		motion.SetBool("Jump", false);
	}

}