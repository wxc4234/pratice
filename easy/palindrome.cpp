#include<iostream>
using namespace std;

int main()
{
    int x;
    cin>>x;
        if (x < 0){
            return false;
        }
        string str = to_string(x);
        for (int i = 0;i < str.size() / 2;i++ ){
            if(str[i] != str[str.size() - i -1]){
                return false;
            }
           
        }
        cout <<"是回文数"<<endl;
        return 0;
    
}