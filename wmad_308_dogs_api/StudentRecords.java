import java.util.Arrays;
import java.util.Scanner;

public class StudentRecords{
    public static void main (String[]args){

        string [][][][] studentRecord = {{{{"Tamad,Juan","Male","BsBA"},{"Penduko,Pedro","Male","BsBA",},{"Botay,Josie","Female","BsBA"},
        {"Padilla,Yesha","Female","BsBA"},{"Ciano,Charity","Female","BsBA"},{"Stone,Brim","Male","BsBA"},{"Reyna,Sage","Female","BsBa"},
        {"Raze,Clove","Female","BsBA"}}},
                {{{"Cubalit,Christian","Male","BsCTE"},{"Erenio,Joshua","Male","BsCTE"},{"Sigue,Aimery","Male","BsCTE"},
                {"Bantas,Kelvin","Male","BsCTE"},{"Plant,Tita","Female","BsCTE"},{"Sen,Pai","Female","BsCTE"}}},
        {{{"Kennon,Rode","Male","BsA"},{"Marcos,Hiwey","Male","BsA"},{"Luneta,Mark","Male","BsA"},{"Gaga,Lady","Female","BsA"},{"Laruan,Erika","Female","BsA"}}},
        {{{"Hunas,Charnel","Male","BsIT"},{"Tyson,Mike","Male","BsIT"},{"Bala-oy,Rhode","Male","BsIT"},{"Yeru,Angelo","Male","BsIT"}}}};

    displayStudentRecords(studentRecord);
}
 public static void displayAllRecord(String [][][][] studRecord){
        for (int i = 0; i<studRecord.length; i++){
            for(int j = 0; j<studRecord[i].length; j++){
                for(int k = 0; k<studRecord[i][j].length; k++){
                    for(int l = 0; l<studRecord[i][j][k].length; l++){
                System.out.println(Arrays.toString(studRecord[i][j][k]));
            }
        }
    }
    
 }

}

public static void displayStudentRecords(String [][][][] studRecord){
        Scanner department = new Scanner(System.in);
        System.out.println("Enter the department you wish to display\n1 for BsBA\n2 for BsCTE\n3 for BsA\n4 for BsIT");
        int dept = department.nextInt();
        switch (dept){
            case 1:
                int counter = 0;
                for(int i = 0; i<studRecord.length; i++){
                    for(int j = 0; j<studRecord[i].length; j++){
                        for(int k = 0; k<studRecord[i][j].length; k++){
                            for(int l = 0; l<studRecord[i][j][k].length; l++){
                        }
                        }
                    }
                    while (counter <= studRecord[0][0].length + 1){
                        System.out.println(Arrays.toString(studRecord[0][counter]));
                        counter++;
                    }
                }

                break;
            case 2:
                counter = 0;
                for(int i = 0; i<studRecord.length; i++){
                    for(int j = 0; j<studRecord[i].length; j++){
                        for(int k = 0; k<studRecord[i][j].length; k++){
                            for( int l = 0; l<studRecord[i][j][k].length; l++){
                                
                            }
                        }

                    }
                    while (counter <= studentRecord[1][0].length + 1){
                        System.out.println(Arrays.toString(studRecord[1][counter]));
                        counter++;
                    }
                }
                break;
            case 3:
                counter = 0;
                for(int i = 0; i<studRecord.length; i++){
                    for(int j = 0; j<studRecord[i].length; j++){
                        for(int k = 0; k<studRecord[i][j].length; k++){
                            for(int l = 0; l<studRecord[i][j][k].length; l++){
                        }
                        }
                    }
                    while (counter <= studRecord[2][0].length + 1){
                        System.out.println(Arrays.toString(studRecord[2][counter]));
                        counter++;
                    }
                }
                break;
        }
    }
}
        
