package com.DSA.Interface;

public class LaptopsCompare {

	public static void main(String[] args) {
		DellLaptop Dell = new DellLaptop();
		System.out.println("Dell Laptop Features \n");
		Dell.Ram();
		Dell.Processor();
		Dell.SSD();
		Dell.GraphicCard();
		
		HP_Laptops HP = new HP_Laptops();
		System.out.println("-----------------------------------------\nHP Laptop Features \n");
		HP.Ram();
		HP.Processor();
		HP.SSD();	}

}
