package ArraysPlayLIst;

public class Merging_Sorted_Arrays {

	public static void main(String[] args) {
		// Create a Java program to merge two sorted arrays into a single sorted array without using any additional space.
		
		int Array1[] = {21,34,38,40,49,53,64,68,80};
		int Array2[] = {11,24,26,34,52,53,74,78,85};
		
		int SortedArray[] = new int[Array1.length+Array2.length];
		
		int p1 = 0;
		int p2 = 0;
		
		for(int i=0;i<SortedArray.length;i++) {
			
		
			if(p1 != Array1.length && p2 != Array2.length) {
				if(Array1[p1] <= Array2[p2]) {
					System.out.print(Array1[p1] +", ");
					p1++;
				}
				else if(Array1[p1] >= Array2[p2]) {
					System.out.print(Array2[p2]+", ");
					p2++;
				}
			}
			
			
		}

	}

}
