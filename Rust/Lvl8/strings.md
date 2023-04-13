
### Shark Pontoon
 find difference in distances 

 ```rust
 //Mine
 fn shark(pontoon_distance: f64, shark_distance: f64, you_speed: f64, shark_speed: f64, dolphin: bool) -> String {
    let mut shark_time = shark_distance / shark_speed;
    let you_time = pontoon_distance / you_speed;
    
    let mut result = "Alive!";

    if dolphin {
        shark_time = shark_distance / (shark_speed / 2.0);
    }
    
    if shark_time < you_time {
        result = "Shark Bait!";
    }

    return result.to_string();
}

//BEST
fn shark(pontoon_distance: f64, shark_distance: f64, you_speed: f64, shark_speed: f64, dolphin: bool) -> String {
    let shark_time = shark_distance / shark_speed * if dolphin { 2.0 } else { 1.0 };
    let your_time = pontoon_distance / you_speed;
    (if shark_time > your_time { "Alive!" } else { "Shark Bait!" }).to_string()
}
```

***




