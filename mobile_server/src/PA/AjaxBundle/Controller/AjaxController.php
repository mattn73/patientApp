<?php

namespace PA\AjaxBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;

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
        $username = $request->get('uname');
        $email = $request->get('email');
        $password = $request->get('psw');
        $age = $request->get('age');
        $sex = $request->get('sex');
        $em = $this->getDoctrine()->getManager();


        $country = $em->getRepository(Country::class)->findOneBy(['countryCode' => $countryCode]);

        /** @var RegionRepository $repo */
        $repo = $em->getRepository(Region::class);
        $regionList = $repo->getRegionByCountryId($country->getId());

        return $this->render('AppBundle:Ajax:get_region.html.twig', [
            'regionList' => $regionList,
        ]);
    }
}



