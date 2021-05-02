import org.springframework.data.jpa.repository.JpaRepository;
import com.example.People.*;
import java.util.List;
public class GroupRequestRepository extends JPARepostiory<GroupRequest, Long>{
	List<GroupRequest> findByGroupOrderByDate(Group group);
	List<GroupRequest> findByStudentOrderByDate(People student);
}