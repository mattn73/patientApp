<?php

namespace PA\AjaxBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;
use PA\AjaxBundle\Entity\User;

class AjaxController extends Controller
{

    Private $em;
    
    
    public function __construct()
    {
        $this->em = getDoctrine()->getManager();
     
    }
   

    
    public function indexAction()
    {
        return $this->render('PAAjaxBundle:Default:index.html.twig');
    }


    /**
     * @param Request $request
     *
     * @return Response
     */
    public function registerAction(Request $request)
    {

        $param = [];
        $param['uname'] = $request->get('uname');
        $param['email'] = $request->get('email');
        $param['psw'] = $request->get('psw');
        $param['age'] = $request->get('age');
        $param['sex'] = $request->get('sex');



      
        $user = new User;

        $user->setUsername( $param['uname']);
        $user->setEmail($param['email']);
        $user->setPassword($param['psw']);
        $user->setSex($param['sex']);
        $user->setAge($param['age']);

    
        $em->persist($user);
        $em->flush();


        /** @var RegionRepository $repo */
        $repo = $em->getRepository(Region::class);
        $regionList = $repo->getRegionByCountryId($country->getId());

        return new response('Successfull');
    }
}



