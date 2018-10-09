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

        $postData = $request->request->all();
    

        if(!isset($postData['params'])){

            return new response('Param Empty');
        }

        $inputparam = $postData['params'];

    
        $user = new User;

        $user->setUsername( $inputparam['uname']);
        $user->setEmail($inputparam['email']);
        $user->setPassword($inputparam['psw']);
        $user->setSex($inputparam['sex']);
        $user->setAge($inputparam['age']);

        $em = getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();


        /** @var RegionRepository $repo */
        $repo = $em->getRepository(Region::class);
        $regionList = $repo->getRegionByCountryId($country->getId());

        return new response('Successfull');
    }
}



