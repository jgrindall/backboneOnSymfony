<?php

/* http://symfony.com/doc/current/book/doctrine.html */

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Entity\Product;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="index")
     */
    public function indexAction(){
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/products", name="list_product")
     */
    public function showModelAction($id){
        $manager = $this->getDoctrine()->getManager();
        $repository = $manager->getRepository('AppBundle:Product');
        $content = $this->get("request")->getContent();
        $product = $repository->findOneById($id);
        if ($product){
            $response = new Response(json_encode($product));
            $response->headers->set('Content-Type', 'application/json');
            return $response;
        }
    }

    /**
     * @Route("/products", name="list_products")
     */
    public function showModelsAction(){
        $content = $this->get("request")->getContent();
        $manager = $this->getDoctrine()->getManager();
        $repository = $manager->getRepository('AppBundle:Product');
        $products = $repository->findAll();
    	$response = new Response(json_encode($products));
        return $response;
    }

    /**
     * @Route("/products", name="remove_products")
     */
    public function removeModelAction($id){
        $manager = $this->getDoctrine()->getManager();
        $repository = $manager->getRepository('AppBundle:Product');
        $product = $repository->find($id);
        if ($product) {
            $manager->remove($product);
            $manager->flush();
        }
        $arr = array('id' => $id);
        $response = new Response(json_encode($arr));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("/products/", name="add_products")
     */
    public function addModelAction(){
        $model = array();
        $content = $this->get("request")->getContent();
        if (!empty($content)){
            $model = json_decode($content, true);
            $product = new Product();
            $product->jsonDeSerialize($model);
            $manager = $this->getDoctrine()->getManager();
            $manager->persist($product);
            $manager->flush();
            $arr = array('id' => $product->getId());
            $response = new Response(json_encode($arr));
            $response->headers->set('Content-Type', 'application/json');
            return $response;
        }
        return null;
    }

    /**
     * @Route("/products/{id}", name="update_products")
     */
    public function updateModelAction($id){
        $manager = $this->getDoctrine()->getManager();
        $repository = $manager->getRepository('AppBundle:Product');
        $content = $this->get("request")->getContent();
        $product = $repository->find($id);
        if ($product && !empty($content)) {
            $model = json_decode($content, true);
            $product->jsonDeSerialize($model);
            $manager->flush();
        }
        $arr = array('id' => $product->getId());
        $response = new Response(json_encode($arr));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}

