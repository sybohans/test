<?php

namespace Yoda\EventBundle\Controller;

class DefaultController extends Controller
{
    public function indexAction($count, $firstName)
    {
        $this->container->getParameter('database_name');

        $em = $this->getDoctrine()->getManager();
        $repo = $em->getRepository('AppBundle:Event');

        $event = $repo->findOneBy(array(
            'name' => 'Darth\'s Birthday Party!',
        ));

        return $this->render('AppBundle:Default:index.html.twig', array(
            'name' => $firstName,
            'count' => $count,
            'example' => $example,
        ));
    }
}
