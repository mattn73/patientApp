<?php

namespace PA\AjaxBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AjaxController extends Controller
{
    public function indexAction()
    {
        return $this->render('PAAjaxBundle:Default:index.html.twig');
    }
}
