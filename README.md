# 📋 JSON Server Cheat Sheet (Query Parameters)

## 🗂 Pagination

Desc | Example
Περιορίζει το αποτέλεσμα | ?_limit=10
Επιστρέφει συγκεκριμένη σελίδα | ?_page=2&_limit=10

## 🔎 Full Text Search

Desc | Example
Ψάχνει σε όλα τα πεδία | ?q=iphone

## 🎯 Filtering

Desc | Example
Filter by exact match | ?categoryId=2
Filter by not equal | ?categoryId_ne=5
Filter where field contains value (like) | ?name_like=Pro
Filter where field >= value | ?price_gte=500
Filter where field <= value | ?price_lte=1000

## ↕️ Sorting

Desc | Example
Sort by field ascending | ?_sort=price&_order=asc
Sort by field descending | ?_sort=rating&_order=desc

## 🛠 Combinations

Desc | Example
Search + Pagination | ?q=macbook&_page=1&_limit=5
Filtering + Sorting + Pagination | ?categoryId=2&_sort=price&_order=asc&_page=1&_limit=10