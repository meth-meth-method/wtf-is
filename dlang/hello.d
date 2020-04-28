import std.stdio;
import std.string;
import std.algorithm;
import std.range;
import std.conv;

void main()
{
    auto tree = [ 1, 2, 5, 12, 23, 56, 2, 2, 2, 2,2,3, 6, 7, 24, 74, 34];
    int[] unique;
    foreach(i, row; tree)
    {
        if (!unique.canFind(row)) {
            unique ~= [row];
        }
    }
    foreach(i, row; unique)
    {

        writefln("%s", row);
    }
}
