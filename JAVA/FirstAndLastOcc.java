// FIND FIRST AND LAST OCCURRENCE OF ELEMENT IN SORTED ARRAY
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] result = {firstOcc(nums, target), lastOcc(nums, target)};
        return result;
    }
     public static int firstOcc(int[] arr,int key) {
  int start = 0;
  int end = arr.length - 1;
  int mid = start + (end - start) / 2;
  int ans = -1;
  while (start <= end) {
    if (arr[mid] == key) {
      ans = mid;
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = start + (end - start) / 2;
  }
  return ans;
}
    
      public static int lastOcc(int[] arr,int key) {
  int start = 0;
  int end = arr.length - 1;
  int mid = start + (end - start) / 2;
  int ans = -1;
  while (start <= end) {
    if (arr[mid] == key) {
      ans = mid;
      start = mid + 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = start + (end - start) / 2;
  }
  return ans;
}
}